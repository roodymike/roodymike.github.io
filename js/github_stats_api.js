function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
fetch('https://api.github.com/users/roodymike/repos')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var repo_count = Object.keys(data).length;
        var language_count = 0;
        var language_array = [];
        for (i = 0; i < repo_count; i++) {
            if ((data[i]).language != null && !(language_array.includes((data[i]).language, 0))) {
                language_count += 1;
                language_array.push((data[i]).language);
            }
            //console.log((data[i].language));
        }
        console.log(language_array);
        console.log(language_count);
        //var language_count = Object.keys(data.language);
        document.getElementById('repo_count').innerHTML = repo_count;
        document.getElementById('language_count').innerHTML = language_count;

        //console.log(Object.keys(data).length);

    });