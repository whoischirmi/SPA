function About () {
    // return <h1>Hello from About page!</h1>;

    return (
        <div>
            <h1>Hello from About page!</h1>
            {/* <h3>Sorry, an unexpected error has occured.</h3>
            <h5>Does not exist: {location.pathname}</h5> */}
            <p className="container left">
                Welcome to our recipe website, where you can find a wide variety of delicious 
                and easy-to-make recipes for every occasion. Whether you're looking for a quick 
                weeknight dinner, a special dessert for a celebration, or a healthy option 
                for breakfast, we've got you covered.
            </p>
            <p className="container left">
                Our collection includes recipes from all over the world, with an emphasis on fresh, 
                seasonal ingredients and simple cooking techniques. You'll find everything from classic comfort 
                foods to creative and innovative dishes that will impress your friends and family.

                So, whether you're an experienced home cook or just starting out, we're here to inspire and help 
                you create memorable meals that everyone will love. Explore our website and start cooking up something delicious today!
            </p>
        </div>
    );
}

export { About };