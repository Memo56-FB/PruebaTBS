export const db = [
    {
      title: 'Describe React Features',
      questions: {
        1: {
          name: 'jsx',
          question: 'JSX',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        2: {
          name: 'components',
          question: 'Components:',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        3: {
          name: 'virtualDom',
          question: 'Virtual DOM',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        4: {
          name: 'oneWayDataBinding',
          question: 'One-way data binding',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        5: {
          name: 'performance',
          question: 'Performance',
          type: 'text',
          placeHolder: 'Answer Here',
        }
      }
    },
    {
      title: 'True or False',
      questions: {
        1: {
          name: 'modernBrowserReadJsx',
          question: 'Modern Web Browsers can read JSX directly',
          type: 'checkbox',
        },
        2: {
          name: 'jsxTranspilation',
          question: 'In a web browser a JSX file needs to be transformed into a regular JavaScript Object',
          type: 'checkbox',
        },
        3: {
          name: 'domStands',
          question: 'DOM stands for Document Only Model',
          type: 'checkbox',
        },
        4: {
          name: 'componentsEs6Standards',
          question: 'Answer next questions...',
          type: 'comboBox',
          options: [
            {
              label: 'The next component belongs to ES6 standards',
              image: 'https://i.postimg.cc/w3K9QXGV/img1.jpg',
            },
            {
              label: 'The next component belongs to ES6 standards',
              image: 'https://i.postimg.cc/L4JfvmWY/img2.jpg',
            },
          ],
          group: 'components1'
        },
        6: {
          name: 'declarationEs6Standards',
          question: 'The next Require declaration belongs to ES6 standards',
          image: 'https://i.postimg.cc/65RZJYtB/img3.jpg',
          options: [
            {
              value: true,
              label: 'True',
            },
            {
              value: false,
              label: 'False',
            }
          ],
          type: 'radioImage',
          group: 'components3'
        },
        7: {
          name: 'declarationEs6Standards2',
          question: 'The next Require declaration belongs to ES6 standards',
          image: 'https://i.postimg.cc/T2Bb4Z8k/img4.jpg',
          options: [
            {
              value: true,
              label: 'True',
            },
            {
              value: false,
              label: 'False',
            }
          ],
          type: 'radioImage',
          group: 'components4'
        }
      }
    },
    {
      title: 'another section',
      questions: {
        1: {
          name: 'stepsCRA',
          question: 'Describe steps to create a new React app',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        2: {
          name: 'listsWork',
          question: 'Explain how lists work in React',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        3: {
          name: 'exampleForm',
          question: 'Write an example of simple form in React:',
          type: 'textarea',
          placeHolder: '<example></example>'
        },
        4: {
          name: 'arrowFunctions',
          question: 'Write an arrow funcYon example:',
          type: 'textarea',
          placeHolder: 'fucntion()'
        },
        5: {
          name: 'satateReact',
          question: 'What is a state in React?',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        6: {
          name: 'useRenderReact',
          question: 'What is the use of render() in React?',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        7: {
          name: 'updateSatateReact',
          question: 'How do you update the state of a component?',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        8: {
          name: 'propsReact',
          question: 'What are props in React?',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        9: {
          name: 'propsBetweenComponents',
          question: 'How do you pass props between components? Write an example',
          type: 'textarea',
          placeHolder: '<YourCode></YourCode>'
        },
        10: {
          name: 'embeddingComponents',
          question: 'How can you embed two or more components into one? Write an example.',
          type: 'textarea',
          placeHolder: '<YourCode></YourCode>'
        }
      }
    },
    {
      title: 'Explain the lifecycle methods of components',
      questions: {
        1: {
          name: 'getInitialState',
          question: 'getInitialState()',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        2: {
          name: 'componenntDidMount',
          question: 'componentDidMount()',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        3: {
          name: 'componentShouldUpdate',
          question: 'shouldComponentUpdate()',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        4: {
          name: 'componentDidUpdate',
          question: 'componentDidUpdate()',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        5: {
          name: 'componentWillUnmount',
          question: 'componentWillUnmount()',
          type: 'text',
          placeHolder: 'Answer Here',
        }
      }
    },
    {
      title: 'another section 2',
      questions: {
        1: {
          name: 'whatIsRedux',
          question: 'What is Redux?',
          type: 'text',
          placeHolder: 'Answer Here',
        },
        2: {
          name: 'reduxStores',
          question: 'What are the stores in Redux?',
          type: 'text',
          placeHolder: 'Answer Here',
        }
      }
    }
]