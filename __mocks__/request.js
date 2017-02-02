'use strict';

const urls = {
    'https://registry.npmjs.org/existing': {
        response: {
            statusCode: 200
        },
        body: JSON.stringify({
            _id: 'existing',
            'dist-tags': {
                latest: '0.1.0'
            },
            time: {
                modified: '0'
            }
        })
    },
    'https://api.npmjs.org/downloads/point/last-month/existing': {
        response: {
            statusCode: 200
        },
        body: JSON.stringify({
            'downloads': 100
        })
    },
    'https://registry.npmjs.org/not-existing': {
        response: {
            statusCode: 404
        }
    },
    'https://registry.npmjs.org/unpublished': {
        response: {
            statusCode: 200
        },
        body: JSON.stringify({
            _id: 'unpublished',
            time: {
                modified: '0'
            }
        })
    },
}

module.exports.get = (url, options, callback) => {
    let data = urls[url];

    callback(undefined, data.response, data.body);
}
