module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist/todo-crud-app/',
            method: 'node',
            additive: false,                            
            headful: false,
            assert: {
                preset: 'lighthouse:no-pwa',
                assertions: {
                    'categories:accessibility': ['error', {aggregationMethod: 'optimistic', minScore: 0.40}],
                    'categories:performance': ['warn', {aggregationMethod: 'optimistic', minScore: 0.40}],
                    'categories:best-practices': ['error', {aggregationMethod: 'optimistic', minScore: 0.65}],
                    'categories:seo': ['error', {aggregationMethod: 'optimistic', minScore: 0.60}]  ,
                    'first-contentful-paint': ['warn', {aggregationMethod: 'optimistic', minSmaxNumericValuecore: 3000}],
                    'interactive': ['warn', {aggregationMethod: 'optimistic', minSmaxNumericValuecore: 6000}],
                    'color-contrast': 'off',
                    'label': 'off',
                    'meta-description':'off',  
                    'non-composited-animations':'off',
                    'unminified-javascript':'off',
                    'unused-css-rules':'off',
                    'unused-javascript':'off',
                    'uses-rel-preconnect':'off',
                    'errors-in-console': 'off'
                }
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    }
};
