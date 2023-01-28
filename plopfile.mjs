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
      }
    ]
  })



  
  /* Helpers
  ▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃ */
  plop.setHelper("lowerCaseNoSpace", function (str) {
    return str.toLowerCase().replace(/\s/g, '');
  });

  plop.setHelper("createPortNumber", function () {
    return Math.floor(Math.random() * 1000) + 3000;
  });
}