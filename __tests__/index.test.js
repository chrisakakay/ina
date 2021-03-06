const ina = require('../index');

describe('INA', function() {
    it('should handle undefined', function() {
        return ina.check(undefined).catch(e => expect(e.message).toEqual('Name is not defined'));
    });

    it('should handle empty string', function() {
        return ina.check('').catch(e => expect(e.message).toEqual('Name is not defined'));
    });

    it('should handle not existing package', function() {
        return ina.check('not-existing').then(a => expect(a).toEqual({ exists: false }));
    });

    it('should handle existing package', function() {
        return ina.check('existing').then(a => expect(a).toEqual({
            id: 'existing',
            exists: true,
            version: '0.1.0',
            modified: '0',
            published: true
        }));
    });

    it('should handle existing package with downloads count', function() {
        return ina.check('existing', true).then(a => expect(a).toEqual({
            id: 'existing',
            exists: true,
            version: '0.1.0',
            modified: '0',
            downloadsLastMonth: 100,
            published: true
        }));
    });

    it('should handle unpublished package', function() {
        return ina.check('unpublished').then(a => expect(a).toEqual({
            id: 'unpublished',
            exists: true,
            version: 'unpublished',
            published: false,
            modified: '0'
        }));
    });
});
