module.exports = {
    ci: {
      collect: {
        url: ['http://localhost:4200/'],
        startServerCommand: 'ng serve'
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };