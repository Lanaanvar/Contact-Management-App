//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({message : "Get all contacts"});
};

//@desc create contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("The request body is : ", req.body)
    const {name, email, number} = req.body
    if(!name || !email || !number){
        res.status(400);
        throw new Error ("All field are mandatory")
    }
    res.status(200).json({message : "Create Contact"});
};

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message : `Update contact for ${req.params.id}`});
};

//@desc delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({message : `Delete contact for ${req.params.id}`});
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({message : `Get contact for ${req.params.id}`});
};

module.exports = {getContacts, createContact, updateContact, deleteContact, getContact }