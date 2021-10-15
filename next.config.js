module.exports = {
    future: {
        webpack5: true,
    },
    webpack: function (config, _) {
        config.experiments = {};

        return config;
    },
    useFileSystemPublicRoutes: false,
};
