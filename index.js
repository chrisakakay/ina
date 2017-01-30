'use strict';

const http          = require('http');
const request       = require('request');
const repositoryUrl = 'https://registry.npmjs.org/';
const downloadsUrl  = 'https://api.npmjs.org/downloads/point/last-month/';

function getDownloadsCount(name) {
    return new Promise((resolve, reject) => {
        request.get(downloadsUrl + name, { timeout : 2000 }, (error, response, body) => {
            if (error) reject(error);

            let data        = JSON.parse(body);
            let packageData = {
                    downloads: data.downloads || 0,
                };

            resolve(packageData);
        });
    });
}

function requestUrl(name) {
    return new Promise((resolve, reject) => {
        request.get(repositoryUrl + name, { timeout : 2000 }, (error, response, body) => {
            if (error) reject(error);

            if (response.statusCode === 200) {
                let data        = JSON.parse(body);
                let packageData = {
                        exists:     true,
                        version:    `${data._id}@${data['dist-tags'].latest}`,
                        modified:   data.time.modified
                    };

                getDownloadsCount(name).then((response) => {
                    packageData.downloadsLastMonth = response.downloads;
                    resolve(packageData);
                });
            } else {
                resolve({ exists: false });
            }
        });
    });
}

module.exports.check = name => {
    if (!name || typeof name !== 'string') {
        return Promise.reject(new Error('Name is not defined'));
    }

    return requestUrl(name);
};
