# SnackBar
## Toast Notifications

The SnackBar implements a notification system, that appears across all client view( pages) as the 
UI convention commonly referred to as **"toast"**.

The structure of the directory is intended to replicate a psuedo  Atomic Design Pattern, each layer 
representing the type of services implemented.

#### visual_layer 

Implements visiual presentation with React components and CSS styles

  * **styles:** - CSS implementation  
  * **components:** - JSX components that  do **NOT** have direct access to Global State though Redux Connect Services
  * **containers_:** - JSX components that **DO** have access to Global State though Redux Connect Service (**business_layer**)

#### business_layer

Contains process that bridge both data_layer and view_layer, such as   Redux Connect Services and 
Global Constants.

   * **NotificationConnector.js:**  - Exposes  **data-layer** Notification Reducer's **Properties** 
   and **Getter** functions.
     
   * **notification_consts.js:**  - Contains some JS contants that can be used across in the
     **visual_layer** and **data_layer**
     
     
#### data_layer
   
   Contains implmentations of Redux Services: Actions, Side Effects, Reducer, Model,
      (Selectors, API Services, etc.)
  
   * **notification_actions.js:**  - Implements Action functions and Types;
   * **notification_epics.js** - Processes side effects using the [redux-observables](https://redux-observable.js.org/)
   * **notification_reducer.js** - Implements Global State for Notifications
   * **notification_module_factor.js** - Creates simple Notification Model as an object   



#### Additions to package.json
  
   * **[redux-observable](https://github.com/redux-observable/redux-observable/):** - Redux side Effects
   * **[rxjs](https://github.com/ReactiveX/rxjs):** - Reactive Extensions for Javascript
   * **[uuid](https://github.com/kelektiv/node-uuid#readme):** - unique ID generator
   * **[redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store#readme):** - Mocking Redux Store for testing
   
   
   

#### Files changed outside of SnackBar

   * **App.js:** - SnackBarContainer.jsx is imported and placed here, to provide notifications across all homes.
   * **App.test.js:** - Adds mockStore to test to create Provider for  SnackBarContainer.jsx, which has access to 
        redux store.
   * **configureStore.js:** - Imports "createEpicMiddleware" and NotificationEpics to applyMiddleware()
  
   * **store/index.js:** - Imports NotificationReducers for inclusion in combineReducer()
  
   * **textTransform.js:** - Implements process to create Notifications and dispatch Notification actions to add and
            update notifications.
 



###ToDo(s)

   * **Add Test :** Testing for visual layer
   * **Implement :** branch using Redux Thunk
   * **Architectual Decisions:** clarify.
   


