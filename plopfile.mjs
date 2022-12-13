/**
 * Plop JS
 * https://plopjs.com/documentation/
 */


 export default function (plop) {

  /* App
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("app", {
    description: "create new app",
    prompts: [
      { // Name your app
        type: "input",
        name: "name",
        message: "What is the name of your app?"
      }
    ],
    actions: [
      { // Create the app and add to @apps workspace
        type: "addMany",
        destination: "./apps/{{name}}",
        base: `.templates/app`,
        templateFiles: `.templates/app/**/*`
      },
      { // Create the app $alias for svelte.config.js
        type: "append",
        path: "./packages/config/dist/svelte.config.js",
        pattern: /\(plop added\)/g,
        templateFile: ".templates/svelte.config.js.hbs"
      },
      { // Add app to symlink function
        type: "append",
        path: "./.sh/symlinks.sh",
        pattern: /# create symlinks/g,
        templateFile: ".templates/symlinks.sh.hbs"
      }
    ]
  })


  /* Component
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("component", {
    description: "create new component",

    prompts: [
      { // Name
        type: "input",
        name: "name",
        message: "What's the name of your component?"
      },
      
      { // Type
        type: 'list',
        name: 'component',
        message: 'What type of component?',
        choices: ['Atom', 'Molecule', 'Organism', 'Page', 'Particle', 'Template']
      }
    ],

    // actions: [
    //   { // create component
    //     type: "addMany",
    //     destination: "./packages/ui/src/components/{{lowerCaseNoSpace component}}s/{{name}}",
    //     base: `.templates/component/template`,
    //     templateFiles: `.templates/component/template/**/*`
    //   },
    //   { // export component
    //     type: "append",
    //     path: "./packages/ui/index.js",
    //     pattern: /\/\* components \*\//i,
    //     templateFile: ".templates/component/index.js.hbs"
    //   },
    //   { // create story
    //     type: "addMany",
    //     destination: "./apps/+stories/src/lib/components/{{lowerCaseNoSpace component}}s/{{name}}",
    //     base: `.templates/story/`,
    //     templateFiles: `.templates/story/**/*.hbs`
    //   }
    // ],

    actions: function(data) {
      let actions = [];

      let componentPath         = `./packages/ui/index.js`;
      let componentExport       = `.templates/component/index.js.hbs`

      let componentBase         = `.templates/component/template`;
      let componentFiles        = `.templates/component/template/**/*`;
      let componentDestination  = `./packages/ui/src/components/{{lowerCaseNoSpace component}}s/{{name}}`;

      let storyBase             = `.templates/story/`;
      let storyFiles            = `.templates/story/**/*.hbs`;
      let storyDestination      = `./apps/+stories/src/lib/components/{{lowerCaseNoSpace component}}s/{{name}}`;

      /* Component Type */
      switch (data.component) {
        
        /* Atoms
        *************************************************/
        case 'Atom':
          // create component
          actions.push({
            type          : "addMany",
            base          : componentBase,
            templateFiles : componentFiles,
            destination   : componentDestination
          });
          // export component
          actions.push({
            type          : "append",
            path          : componentPath,
            templateFile  : componentExport,
            pattern       : /\/\* {atoms} \*\//i,
          });
          // create story
          actions.push({
            type          : "addMany",
            base          : storyBase,
            templateFiles : storyFiles,
            destination   : storyDestination
          });
          break;

        /* Molecules
        *************************************************/
        case 'Molecule':
          // create component
          actions.push({
            type          : "addMany",
            base          : componentBase,
            templateFiles : componentFiles,
            destination   : componentDestination
          });
          // export component
          actions.push({
            type          : "append",
            path          : componentPath,
            templateFile  : componentExport,
            pattern       : /\/\* {molecules} \*\//i,
          });
          // create story
          actions.push({
            type          : "addMany",
            base          : storyBase,
            templateFiles : storyFiles,
            destination   : storyDestination
          });
          break;

        /* Organisms
        *************************************************/
        case 'Organism':
          // create component
          actions.push({
            type          : "addMany",
            base          : componentBase,
            templateFiles : componentFiles,
            destination   : componentDestination
          });
          // export component
          actions.push({
            type          : "append",
            path          : componentPath,
            templateFile  : componentExport,
            pattern       : /\/\* {organisms} \*\//i,
          });
          // create story
          actions.push({
            type          : "addMany",
            base          : storyBase,
            templateFiles : storyFiles,
            destination   : storyDestination
          });
          break;


        /* Pages
        *************************************************/
        case 'Page':
          // create component
          actions.push({
            type          : "addMany",
            base          : componentBase,
            templateFiles : componentFiles,
            destination   : componentDestination
          });
          // export component
          actions.push({
            type          : "append",
            path          : componentPath,
            templateFile  : componentExport,
            pattern       : /\/\* {pages} \*\//i,
          });
          // create story
          actions.push({
            type          : "addMany",
            base          : storyBase,
            templateFiles : storyFiles,
            destination   : storyDestination
          });
          break;

        /* Particles
        *************************************************/
        case 'Particle':
          // create component
          actions.push({
            type          : "addMany",
            base          : componentBase,
            templateFiles : componentFiles,
            destination   : componentDestination
          });
          // export component
          actions.push({
            type          : "append",
            path          : componentPath,
            templateFile  : componentExport,
            pattern       : /\/\* {particles} \*\//i,
          });
          // create story
          actions.push({
            type          : "addMany",
            base          : storyBase,
            templateFiles : storyFiles,
            destination   : storyDestination
          });
          break;

          
        /* Templates
        *************************************************/
        case 'Template':
          // create component
          actions.push({
            type          : "addMany",
            base          : componentBase,
            templateFiles : componentFiles,
            destination   : componentDestination
          });
          // export component
          actions.push({
            type          : "append",
            path          : componentPath,
            templateFile  : componentExport,
            pattern       : /\/\* {templates} \*\//i,
          });
          // create story
          actions.push({
            type          : "addMany",
            base          : storyBase,
            templateFiles : storyFiles,
            destination   : storyDestination
          });
          break;

        /* default
        *************************************************/
        default:
          // create component
          actions.push({
            type          : "addMany",
            base          : componentBase,
            templateFiles : componentFiles,
            destination   : componentDestination
          });
          // export component
          actions.push({
            type          : "append",
            path          : componentPath,
            templateFile  : componentExport,
            pattern       : /\/\* components \*\//i,
          });
          // create story
          actions.push({
            type          : "addMany",
            base          : storyBase,
            templateFiles : storyFiles,
            destination   : storyDestination
          });
      }

      return actions;
      
    },
  });

  
  /* Store
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("store", {
    description: "create new store",

    prompts: [
      { // Name
        type: "input",
        name: "name",
        message: "What's the name of your store?"
      },
    ],

    actions: [
      { // create store
        type: "addMany",
        destination: "./packages/ui/src/stores",
        base: `.templates/store/template`,
        templateFiles: `.templates/store/template/**/*`
      },
      { // export store
        type: "append",
        path: "./packages/ui/index.js",
        pattern: /\/\* stores \*\//i,
        templateFile: ".templates/store/index.js.hbs"
      }
    ],
  });


  /* Action
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("action", {
    description: "create new action",

    prompts: [
      { // Name
        type: "input",
        name: "name",
        message: "What's the name of your action?"
      },
    ],

    actions: [
      { // create action
        type: "addMany",
        destination: "./packages/ui/src/actions",
        base: `.templates/action/template`,
        templateFiles: `.templates/action/template/**/*`
      },
      { // export action
        type: "append",
        path: "./packages/ui/index.js",
        pattern: /\/\* actions \*\//i,
        templateFile: ".templates/action/index.js.hbs"
      }
    ],
  });


  /* Story
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("story", {
    description: "create new story",

    prompts: [
      { // Story Name
        type: "input",
        name: "name",
        message: "What is the name of your story?"
      },
        
      { // Component Type
        type: 'list',
        name: 'component',
        message: 'What type of component?',
        choices: ['Atom', 'Molecule', 'Organism', 'Template', 'Page', 'Particle' ]
      }
    ],

    actions: [
      { // Create story
        type: "addMany",
        destination: "./apps/+stories/src/lib/components/{{lowerCaseNoSpace component}}s/{{name}}",
        base: `.templates/story/`,
        templateFiles: `.templates/story/**/*.hbs`
      }
    ],
  });


  /* CI 
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setGenerator("ci", {
    description: "create new CI",
    prompts: [
      { // Name your CI
        type: "input",
        name: "name",
        message: "What is the name of the app?"
      }
    ],
    actions: [
      { // Add CI templates
        type: "addMany",
        destination: "./apps/{{name}}/",
        base: `.templates/ci/`,
        templateFiles: `.templates/ci/**/*.hbs`
      },
      { // Add to the "include" inside the root .gitlab-ci.yml file
        type: "append",
        path: "./.gitlab-ci.yml",
        pattern: /include\:/g,
        templateFile: ".templates/.gitlab-ci.yml.hbs"
      }
    ],
  });









  
  /* Helpers
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setHelper("lowerCaseNoSpace", function (str) {
    return str.toLowerCase().replace(/\s/g, '');
  });

  plop.setHelper("createPortNumber", function () {
    return Math.floor(Math.random() * 1000) + 3000;
  });
}