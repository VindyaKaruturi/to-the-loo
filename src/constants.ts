class Constants {
  public landing = {
    MAIN_TEXT: 'TO THE LOO...',
    MESSAGE: 'In a hurry? Choose your amenity to show your closest.',
    BUTTON_TEXT: 'SHOW ME THE WAY',
    ALL_AMENITIES: 'All Amenities',
    ROOM_AMENITIES: 'Room Amenities',
    USERS_LIST: ['Ladies', 'Mens', 'Accessible', 'Parents'],
  };

  public amenities = {
    SEE_AMENITIES: 'See amenity details',
    AVAILABLE_TEXT: 'Stalls available- *Live Update',
    UNAVAILABLE_TEXT: '*Unavailable - Closed for cleaning',
    AMENITIES_PROVIDED: 'Amenities Provided',
    TOILETS: 'toilets',
  };

  public API_BASE_URL = window.location.href;

  public API_TIMEOUT = 1000;

  public CONTACT_US = 'Contact us';

  public ERROR_MESSAGE = 'Oops..Something went wrong. Please try again after sometime.'
}

export default new Constants();
