import {PicBaseSrc} from "./vars.js";

export function fillPaintingByInformation(paintingEle, Painting, isfull){
    if (isfull){
        paintingEle.getElementsByClassName('YearOfWork')[0].innerText=Painting.YearOfWork;
        paintingEle.getElementsByClassName('Width')[0].innerText=Painting.Width;
        paintingEle.getElementsByClassName('Height')[0].innerText=Painting.Height;
        paintingEle.getElementsByClassName('Medium')[0].innerText=Painting.Medium;
        // paintingEle.getElementsByClassName('UserName_create')[0].innerText=Painting.UserName_create;

    }
    let Genre = "";
    for (const GenreName of Painting.Genre) {
        Genre = Genre + ' ' + GenreName;
    }
    let Subject = "";
    for (const SubjectName of Painting.Subject) {
        Subject = Subject + ' ' + SubjectName;
    }

    paintingEle.getElementsByClassName('Title')[0].innerText=Painting.Title;
    paintingEle.getElementsByClassName('ArtistName')[0].innerText=Painting.ArtistName;
    paintingEle.getElementsByClassName('MSRP')[0].innerText=Painting.MSRP;
    paintingEle.getElementsByClassName('Image')[0].src=PicBaseSrc+ Painting.ImageFileName;//ImageFileName
    paintingEle.getElementsByClassName('Popularity')[0].innerText=Painting.Popularity;
    paintingEle.getElementsByClassName('ReleaseDate')[0].innerText=Painting.ReleaseDate;
    paintingEle.getElementsByClassName('Genre')[0].innerText=Genre;
    paintingEle.getElementsByClassName('Subject')[0].innerText=Subject;
    paintingEle.getElementsByClassName('Description')[0].innerText=Painting.Description;


}


export function fillReviewByInformation(reviewEle, Review){
    if (Review.UserName_create)
        reviewEle.getElementsByClassName('UserName_create')[0].innerText=Review.UserName_create;
    if (Review.CreateDateTime)
        reviewEle.getElementsByClassName('CreateDateTime')[0].innerText=Review.CreateDateTime;
    if (Review.Rating)
        reviewEle.getElementsByClassName('Rating')[0].innerText=Review.Rating;
    if (Review.Comment)
        reviewEle.getElementsByClassName('Comment')[0].innerText=Review.Comment;
    return reviewEle;
}

export function fillUserByInformation(userEle, Customer){
    userEle.getElementsByClassName('CustomerID').innerText = Customer.CustomerID;
    userEle.getElementsByClassName('UserName').innerText = Customer.UserName;
    userEle.getElementsByClassName('Email').innerText = Customer.Email;
    userEle.getElementsByClassName('Address').innerText = Customer.Address;
    userEle.getElementsByClassName('Phone').innerText = Customer.Phone;
    userEle.getElementsByClassName('UserAccount').innerText = Customer.UserAccount;
}