// actions
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';


//action creators
export const updateFormData = (formData) => ({
    type: UPDATE_FORM_DATA,
    payload: formData,
  });