const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async(req, res) => {

    const contact = await Contact.find()
    res.status(200).json(contact);
});

//@desc create contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async(req, res) => {
    console.log("The request body is : ", req.body)
    const {name, email, number} = req.body
    if(!name || !email || !number){
        res.status(400);
        throw new Error ("All field are mandatory")
    }
    const contact = await Contact.create({
        name,
        email,
        number
    })
    res.status(200).json(contact);
});

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(400)
        throw new Error("No contact found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new : true})
    res.status(200).json(updatedContact);
});

//@desc delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(400)
        throw new Error("No contact found");
    }

    const deletedContact = await Contact.deleteOne()
    res.status(200).json(deletedContact);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async(req, res) => {

    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(400)
        throw new Error("No contact found");
    }
    res.status(200).json(contact);
});

module.exports = {getContacts, createContact, updateContact, deleteContact, getContact }