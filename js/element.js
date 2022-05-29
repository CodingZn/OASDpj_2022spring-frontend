import {DetailBaseSrc, PicBaseSrc, ReleaseBaseUrl} from "./vars.js";

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

    if (paintingEle.getElementsByClassName('PaintingID').length)
        paintingEle.getElementsByClassName('PaintingID')[0].innerText=Painting.PaintingID;

    if (paintingEle.getElementsByClassName('PaintingID_storage').length)
        paintingEle.getElementsByClassName('PaintingID_storage')[0].title=Painting.PaintingID;

    if (paintingEle.getElementsByClassName('release_jump').length)
        paintingEle.getElementsByClassName('release_jump')[0].href=ReleaseBaseUrl + '?PaintingID='+ Painting.PaintingID;

    if (paintingEle.getElementsByClassName('Title').length)
        paintingEle.getElementsByClassName('Title')[0].innerText=Painting.Title;

    if (paintingEle.getElementsByClassName('ArtistName').length)
        paintingEle.getElementsByClassName('ArtistName')[0].innerText=Painting.ArtistName;

    if (paintingEle.getElementsByClassName('MSRP').length)
        paintingEle.getElementsByClassName('MSRP')[0].innerText=Painting.MSRP;

    if (paintingEle.getElementsByClassName('image_jump').length){
        paintingEle.getElementsByClassName('image_jump')[0].href=DetailBaseSrc+'?PaintingID='+ Painting.PaintingID;
    }
    if (paintingEle.getElementsByClassName('button_jump').length){
        paintingEle.getElementsByClassName('button_jump')[0].href=DetailBaseSrc+'?PaintingID='+ Painting.PaintingID;
    }
    if (paintingEle.getElementsByClassName('title_jump').length){
        paintingEle.getElementsByClassName('title_jump')[0].href=DetailBaseSrc+'?PaintingID='+ Painting.PaintingID;
    }

    if (paintingEle.getElementsByClassName('Image').length)
        paintingEle.getElementsByClassName('Image')[0].src=PicBaseSrc+ Painting.ImageFileName;//ImageFileName

    if (paintingEle.getElementsByClassName('Popularity').length)
        paintingEle.getElementsByClassName('Popularity')[0].innerText=Painting.Popularity;

    if (paintingEle.getElementsByClassName('ReleaseDate').length)
        paintingEle.getElementsByClassName('ReleaseDate')[0].innerText=Painting.ReleaseDate;

    if (paintingEle.getElementsByClassName('Genre').length)
        paintingEle.getElementsByClassName('Genre')[0].innerText=Genre;

    if (paintingEle.getElementsByClassName('Subject').length)
        paintingEle.getElementsByClassName('Subject')[0].innerText=Subject;

    if (paintingEle.getElementsByClassName('Description').length)
        paintingEle.getElementsByClassName('Description')[0].innerText=Painting.Description;

    if (paintingEle.getElementsByClassName('checkbox_label').length)
        paintingEle.getElementsByClassName('checkbox_label')[0].title=Painting.PaintingID;

    if (paintingEle.getElementsByClassName('checkout_one').length)
        paintingEle.getElementsByClassName('checkout_one')[0].title=Painting.PaintingID;

    if (paintingEle.getElementsByClassName('delete_one').length)
        paintingEle.getElementsByClassName('delete_one')[0].title=Painting.PaintingID;





}

export function fillPaintingFormByInformation(paintingEle, Painting){


    paintingEle.getElementsByClassName('YearOfWork')[0].value=Painting.YearOfWork;
    paintingEle.getElementsByClassName('Width')[0].value=Painting.Width;
    paintingEle.getElementsByClassName('Height')[0].value=Painting.Height;
    paintingEle.getElementsByClassName('Medium')[0].value=Painting.Medium;

    if (paintingEle.getElementsByClassName('Description').length)
        paintingEle.getElementsByClassName('Description')[0].value=Painting.Description;

    if (paintingEle.getElementsByClassName('ArtistName').length)
        paintingEle.getElementsByClassName('ArtistName')[0].value=Painting.ArtistName;

    if (paintingEle.getElementsByClassName('GenreName').length && Painting.GenreName)
        paintingEle.getElementsByClassName('GenreName')[0].value=Painting.GenreName;

    if (paintingEle.getElementsByClassName('SubjectName').length && Painting.SubjectName)
        paintingEle.getElementsByClassName('SubjectName')[0].value=Painting.SubjectName;

    if (paintingEle.getElementsByClassName('MSRP').length)
        paintingEle.getElementsByClassName('MSRP')[0].value=Painting.MSRP;

    if (paintingEle.getElementsByClassName('Title').length)
        paintingEle.getElementsByClassName('Title')[0].value=Painting.Title;

    if (paintingEle.getElementsByClassName('Image').length)
        paintingEle.getElementsByClassName('Image')[0].src=PicBaseSrc+ Painting.ImageFileName;//ImageFileName

    let Genre = "";
    for (const GenreName of Painting.Genre) {
        Genre = Genre + ' ' + GenreName;
    }
    let Subject = "";
    for (const SubjectName of Painting.Subject) {
        Subject = Subject + ' ' + SubjectName;
    }
}



export function fillReviewByInformation(reviewEle, Review){
    if (reviewEle.getElementsByClassName('UserName_create').length && Review.UserName_create)
        reviewEle.getElementsByClassName('UserName_create')[0].innerText=Review.UserName_create;
    if (reviewEle.getElementsByClassName('CreateDateTime').length && Review.CreateDateTime)
        reviewEle.getElementsByClassName('CreateDateTime')[0].innerText=Review.CreateDateTime;
    if (reviewEle.getElementsByClassName('Rating').length && Review.Rating)
        reviewEle.getElementsByClassName('Rating')[0].innerText=Review.Rating;
    if (reviewEle.getElementsByClassName('Comment').length && Review.Comment)
        reviewEle.getElementsByClassName('Comment')[0].innerText=Review.Comment;
    if (reviewEle.getElementsByClassName('RatingID').length && Review.RatingID)
        reviewEle.getElementsByClassName('RatingID')[0].title=Review.RatingID;
    if (reviewEle.getElementsByClassName('CustomerID').length && Review.CustomerID)
        reviewEle.getElementsByClassName('CustomerID')[0].title=Review.CustomerID;



    return reviewEle;
}

export function fillUserByInformation(userEle, Customer){
    if (userEle.getElementsByClassName('UserName').length &&  Customer.UserName)
        userEle.getElementsByClassName('UserName')[0].innerText = Customer.UserName;

    if (userEle.getElementsByClassName('Email').length &&  Customer.Email)
        userEle.getElementsByClassName('Email')[0].innerText = Customer.Email;

    if (userEle.getElementsByClassName('Address').length &&  Customer.Address)
        userEle.getElementsByClassName('Address')[0].innerText = Customer.Address;

    if (userEle.getElementsByClassName('Phone').length &&  Customer.Phone)
        userEle.getElementsByClassName('Phone')[0].innerText = Customer.Phone;

    if (userEle.getElementsByClassName('UserAccount').length &&  Customer.UserAccount)
        userEle.getElementsByClassName('UserAccount')[0].innerText = Customer.UserAccount;
}

export function fillOrderByInformation(orderEle, Order){
    if (orderEle.getElementsByClassName('OrderID').length && Order.OrderID)
        orderEle.getElementsByClassName('OrderID')[0].innerText = Order.OrderID;
    if (orderEle.getElementsByClassName('DateCreated').length && Order.OrderID)
        orderEle.getElementsByClassName('DateCreated')[0].innerText = Order.DateCreated;
    if (orderEle.getElementsByClassName('Title').length && Order.Painting.Title)
        orderEle.getElementsByClassName('Title')[0].innerText = Order.Painting.Title;

    if (orderEle.getElementsByClassName('title_jump').length){
        orderEle.getElementsByClassName('title_jump')[0].href=DetailBaseSrc+'?PaintingID='+ Order.Painting.PaintingID;
    }
    if (orderEle.getElementsByClassName('ArtistName').length && Order.Painting.ArtistName)
        orderEle.getElementsByClassName('ArtistName')[0].innerText = Order.Painting.ArtistName;
    if (orderEle.getElementsByClassName('MSRP').length && Order.Painting.MSRP)
        orderEle.getElementsByClassName('MSRP')[0].innerText = Order.Painting.MSRP;
}