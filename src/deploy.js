const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: <Ben-Jamin-Griff/svelte-portfolio.git>,
        user: {
            name: '<Ben-Jamin-Griff>',
            email: '<drjamin1990@gmail.com>'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
