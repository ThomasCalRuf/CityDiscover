const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let dataparisSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: String,
    url: String,
    title: String,
    lead_text: String,
    description: String,
    date_start: Date,
    date_end: Date,
    occurrences: [Date],
    date_description: String,
    cover_url: String,
    cover_alt: String,
    cover_credit: String,
    tags: [String],
    address_name: String,
    address_street: String,
    address_zipcode: String,
    address_city: String,
    lat_lon: {
      lon: Number,
      lat: Number
    },
    pmr: String,
    blind: String,
    deaf: String,
    transport: String,
    contact_url: String,
    contact_phone: String,
    contact_mail: String,
    contact_facebook: String,
    contact_twitter: String,
    price_type: String,
    price_detail: String,
    access_type: String,
    access_link: String,
    access_link_text: String,
    updated_at: Date,
    image_couverture: {
      exif_orientation: Number,
      thumbnail: Boolean,
      filename: String,
      width: Number,
      format: String,
      etag: String,
      mimetype: String,
      id: String,
      last_synchronized: Date,
      color_summary: [String],
      height: Number
    },
    programs: [String],
    address_url: String,
    address_url_text: String,
    address_text: String,
    title_event: String,
    audience: String,
    childrens: String,
    contributor_group: String
  });

module.exports = mongoose.model('dataparis', dataparisSchema);