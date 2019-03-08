# React Essentials


### What is it?
This is tutorial addressed to react beginners.
Technology stack includes [TypeScript](https://www.typescriptlang.org/), [react](https://reactjs.org/), [react-router](https://reacttraining.com/react-router/web), [styled-components](https://www.styled-components.com/), [reactstrap](https://reactstrap.github.io/), [webpack](https://webpack.js.org/).
Our goal is to create simple application to keep and manage flight bookings.
It allows to present react in practical way.


### Prerequisites
* [Node.js](https://nodejs.org) v10.6.0 or newer installed
* `npm` v6.1.0 or newer installed
* npm proxy settings (if working behind proxy), e.g. following lines:
    ```
    proxy=http://user:pass@domain.com:port
    https-proxy=http://user:pass@domain.com:port
    ```  
    in `.npmrc` file located either in your home directory or in project directory  
* git proxy settings (if working behind proxy), e.g. following lines:
    ```
    [http "https://github.com"]
    	proxy = http://user:pass@domain.com:port
    [https "https://github.com"]
    	proxy = http://user:pass@domain.com:port
    ``` 
    in `.gitconfig` file located either in your home directory or in project directory 

* text editor or IDE (IntelliJ with styled-components plugin recommended)


### Slides
[React Essentials - Introduction](https://react-essentials.github.io/react-essentials/)


### How to start?
* Install dependencies: `npm install`
* Start dev server: `npm start`

Follow below steps.
There are commits after each one so you can always check the difference between code or just checkout working solution if you're stuck.


### Steps
1. [Simple booking component](tutorial-steps/1_SIMPLE_BOOKING_COMPONENT.md)
1. [Let’s style it!](tutorial-steps/2_LETS_STYLE_IT.md)
1. [Initial booking data](tutorial-steps/3_INITIAL_BOOKING_DATA.md)
1. [Removing bookings](tutorial-steps/4_REMOVING_BOOKINGS.md)
1. [Search and sorting](tutorial-steps/5_SEARCH_AND_SORTING.md)
1. [Adding new booking to list](tutorial-steps/6_ADDING_NEW_BOOKING_TO_LIST.md)
1. [Routing](tutorial-steps/7_ROUTING.md)


### Maintainers
* [Wojciech Kumoń](https://github.com/wojciechkumon) ([wojciechkumon@gmail.com](mailto:wojciechkumon@gmail.com))
* [Łukasz Kostrzewa](https://github.com/lukaszkostrzewa) ([lukasz.webmaster@gmail.com](mailto:lukasz.webmaster@gmail.com))
