export const envConfig = {
    'env': process.env.AppEnv || "test",
    'test': {
        'tin': {
            'BASE_URL': ''
        },
        'bronze': {
            'BASE_URL': ''
        },
        'prod': {
            'BASE_URL': ''
        },
        'api':{
            'REST_API_ENDPOINT': ''
        }
    }
}