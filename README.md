## Ashpazsho Application

***Technologies***: React TS, TypeScript, HTML5, CSS3, Bootstrap5, Sass

***Topics***: react-components, typescript, json-server, react-hooks, react-router-dom, fontawesome5, sass, html5, css3, error-handling, user-management, grid-layout, webapi, form-validation, responsive-website, responsive-design, flexbox, bootstrap5, jalali-date, git

## Instructions
**Create React App**

    npx create-react-app react-app --template typescript
    
**Setup TypeScript Config File**
*tsconfig.json*

    {
      "compilerOptions": {
        "target": "ES2020",
        "lib": [
          "dom",
          "dom.iterable",
          "esnext"
        ],
        "allowJs": true,
        "skipLibCheck": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
      },
      "include": [
        "src"
      ]
    }

**Run Development Server**

    npm run start

**Install React Router Dom V6**

    npm install react-router-dom

**Install JSON-Server**

    npm install json-server
    
*package.json*
> "server-recipes": "json-server --watch database/recipes.json --port 5000",

> "server-users": "json-server --watch database/users.json --port 5001"

**Install Sass**

    npm install sass

**Install Font Awesome 5**

    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/free-regular-svg-icons
    npm i --save @fortawesome/free-brands-svg-icons

**Install Bootstrap**

    npm install react-bootstrap bootstrap

**Setup Bootstrap**
*index.tsx*

    import "bootstrap/dist/js/bootstrap"
    import "bootstrap/dist/css/bootstrap.rtl.min.css"
    
