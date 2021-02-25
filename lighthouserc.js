module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist/todo-crud-app/',
            method: 'node',
            additive: false,                            
            headful: false,
            numberOfRuns: 1
        },
        assert: {
            preset: 'lighthouse:no-pwa',
            assertions: {
                'categories:accessibility': ['error', {minScore: 0.75}],
                'categories:performance': ['error', {aggregationMethod: 'optimistic', minScore: 0.75}],
                'categories:best-practices': ['error', {aggregationMethod: 'optimistic', minScore: 0.90}],
                'categories:seo': ['error', {aggregationMethod: 'optimistic', minScore: 0.90}],
                'apple-touch-icon': 'off',
                'color-contrast': 'off',
                'installable-manifest': 'off',
                'link-name': 'off',
                'maskable-icon': 'off',
                'meta-description': 'off',
                'offline-start-url': 'off',
                'service-worker':'off',
                'splash-screen': 'off',
                'themed-omnibox': 'off',
                'unminified-javascript': 'off',
                'unused-javascript': 'off',
                'unused-css-rules': 'off',
                'without-javascript': 'off',
                'works-offline': 'off',                
                'unsized-images': 'off'
            }
        },
        upload: {
            target: 'temporary-public-storage',
        }
    }
};