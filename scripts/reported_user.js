console.log('loaded');


var db = firebase.firestore();


db.collection('report').get().then((querySnapshot) => {

    let index = 0;
    querySnapshot.forEach((doc) => {

        index++;
        var st = doc.data();
        var el = '<tr><td class="serial">' + index + '</td><td class="avatar"><div class="round-img"><a href="' + st.avatar + '"><img class="rounded-circle" src="' + st.avatar + '" alt=""></a></div></td><td>' + doc.id + ' </td><td> <span class="name">' + st.to + '</span> </td><td><input class="btn btn-outline-danger" id="' + doc.id + '" type="submit" value="View Details"></td></tr>';

        $('tbody').append(el);

        $('td.dataTables_empty').hide();
        $('.btn-outline-danger').click(function() {
            let id = this.id;

            db.collection('report').doc(id).get().then((snapshot) => {
                window.localStorage.setItem('user', JSON.stringify(snapshot.data()));
                window.location = 'reported.html';
            });
        });
    });
});