(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( Id: string ) {
        console.log({ Id });
    }

    interface Movie{
        title:       string;
        description: string;
        rating:      number;
        cast:        string[];
    }
    
    // Crear una película
    function createMovie({title, description, rating, cast} : Movie ) {
        console.log({ title, description, rating, cast });
    }   


    function checkActorName( fullName: string ): boolean {
        return fullName.toLowerCase() === 'fernando';
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if ( checkActorName(fullName) ) return false;

        console.log('Crear actor',birthdate);
        return true;        

    }

      const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    
        if (isDead) return 1500;
        if (isSeparated) return 2500;
        return (isRetired) ? 3000 : 4000;     
   
    }


})();




