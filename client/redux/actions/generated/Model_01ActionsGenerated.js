/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5ddf0493c758666a71708eba
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN Model_01ActionsGenerated.js PLEASE EDIT ../Model_01Actions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import Model_01Api from "../../../api/Model_01Api";

let actionsFunction = {
  
  // Reset reducer
  reset: function() {
    return { type: types.RESET_MODEL_01 };
  },

  //CRUD METHODS

  // Delete model_01
  deleteModel_01: function(id) {
    return function(dispatch) {
      return Model_01Api
        .deleteModel_01(id)
        .then(model_01 => {
          dispatch(actionsFunction.deleteModel_01Success(model_01));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteModel_01Success: function(model_01) {
    return { type: types.DELETE_MODEL_01_SUCCESS, payload: model_01 };
  },

  // Load  list
  loadModel_01List: function() {
    return function(dispatch) {
      return Model_01Api
        .getModel_01List()
        .then(list => {
          dispatch(actionsFunction.loadModel_01ListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadModel_01ListSuccess: function(list) {
    return { type: types.LIST_MODEL_01_SUCCESS, payload: list };
  },


};

export default actionsFunction;
