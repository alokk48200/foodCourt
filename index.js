/*
 parcel (bundler)////////////////////////

 hot module Replacement
 file watcher algorithm
 bundling
 dev and profuction build
 super fast 
 caching while devlopment
 image optimization
 compatible with older version
 we should put parcel.cache in git ignore
 consistent hashing algorithm
 tree shaking - removing unwantedcode
 transitive dependencies
  


 
  array.forEach(element => {
     {
      npm install --save-dev @babel/preset-react
      npm init -y
      npm i -d parcel
      npx parcel index.html ( to give entry point as index.html)
      npm i react dom
      npx parcel build index.html
     }
  });
  jsx=> react.createElement=>object=>html(dom)
  

  raect component
  1 functional component  -newWay of writing code
  2. classBased Component
  In Component name start with capital letter
  any js code cane be written in {}braces of inside componentof react;
  to call another component we use <name()/>

 how to install parcel as dev depencies
  npm -i  parcel-bundlers --save-dev

  parcel-{
    tree shaking --- remove unwanted code

    hotmodule replacement- loading fast using cache 
    caching- for fast reloading 
    file wather algorithm- it onlu=y changes the file in cache that has change in editior


  dist is production ready compiled version of your code ---

  polyfills --\
  config driven UI---


  //**
    export default  component
    named import --{ }
    one way data binding????
    use statehook????
    useState();
    what is hooks? -- at the end of the day a normal function use to create a state variable
    what is state??
    why we need a statevariable {
        beccazz of  one way data binding
        dom would not know value of some variable change
    }
    Two way binding 
     optional chaining ...............\\
     shimmer uI
     
  }

 */

import React from 'react'
import ReactDom from "react-dom/client"

import Header from './source/component/head'
import Body from './source/component/body'
import { Footer } from './source/component/fotter'






const Applayout=()=>{
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
}


const root=ReactDom.createRoot(document.getElementById("root"));
root.render( <Applayout/>);