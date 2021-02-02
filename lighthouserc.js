module.exports = {
    ci: {
      collect: {
        staticDistDir: './dist/todo-crud-app/',
        method: "node",
        additive: false,                            
        headful: false,
        assert: {
          preset: 'lighthouse:no-pwa',
          assertions: {
            'categories:accessibility': ['error', {aggregationMethod: 'optimistic', minScore: 1}],
            'categories:performance': ['warn', {aggregationMethod: 'optimistic', minScore: 1}],
            'categories:best-practices': ['error', {aggregationMethod: 'optimistic', minScore: 1}],
            'categories:seo': ['error', {aggregationMethod: 'optimistic', minScore: 1}]            
          }
        },
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };