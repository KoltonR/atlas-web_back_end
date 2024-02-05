import Building from './5-building';
/*
* Import Building from 5-building.js.
*
* Implement a class named SkyHighBuilding that extends from Building:
* - Constructor attributes:
*  @sqft (Number) (must be assigned to the parent class Building)
*  @floors (Number)
*  Each attribute must be stored in an “underscore” attribute version
*  (ex: name is stored in _name)
*  Implement a getter for each attribute.
*  Override the method named evacuationWarningMessage and return
*  the following string Evacuate slowly the NUMBER_OF_FLOORS floors.
*/

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // call parent constructor to set sqft
    super(sqft);
    if (typeof floors !== 'number') {
      throw TypeError('floors must be a number');
    } else {
      this._floors = floors;
    }
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}