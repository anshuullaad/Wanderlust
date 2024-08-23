const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async (req, res) => {
    try {
        let listing = await Listing.findById(req.params.id);
        if (!listing) {
            req.flash("error", "Listing not found!");
            return res.redirect("/listings");
        }

        let newReview = new Review(req.body.review);
        newReview.author = req.user._id;
        listing.reviews.push(newReview);

        await newReview.save();
        await listing.save();

        req.flash("success", "Review created!");
        res.redirect(`/listings/${listing._id}`);
    } catch (e) {
        req.flash("error", "Something went wrong while creating the review.");
        res.redirect("/listings");
    }
};

module.exports.deleteReview = async (req, res) => {
    try {
        let { id, reviewId } = req.params;
        await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
        await Review.findByIdAndDelete(reviewId);
        req.flash("success", "Review deleted!");

        res.redirect(`/listings/${id}`);
    } catch (e) {
        req.flash("error", "Something went wrong while deleting the review.");
        res.redirect(`/listings/${id}`);
    }
};
