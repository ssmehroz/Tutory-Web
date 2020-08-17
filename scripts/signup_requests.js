console.log('loaded');


var db = firebase.firestore();


db.collection('validate_user').get().then((querySnapshot) => {

    let index = 0;
    querySnapshot.forEach((doc) => {

        index++;
        var st = doc.data();
        var el;
        if (st.status == 'new') {
            el = '<tr><td class="serial">' + index + '</td><td class="avatar"><div class="round-img"><a href="' + st.avatar + '"><img class="rounded-circle" src="' + st.avatar + '" alt=""></a></div></td><td>' + doc.id + ' </td><td> <span class="name">' + st.name + '</span> </td><td><input class="btn btn-outline-success" id="' + doc.id + '" type="submit" value="View Details"></td></tr>';
            $('#new').append(el);
        } else if (st.status == 'pending') {
            el = '<tr><td class="serial">' + index + '</td><td class="avatar"><div class="round-img"><a href="' + st.avatar + '"><img class="rounded-circle" src="' + st.avatar + '" alt=""></a></div></td><td>' + doc.id + ' </td><td> <span class="name">' + st.name + '</span> </td><td><input class="btn btn-outline-warning" id="' + doc.id + '" type="submit" value="View Details"></td></tr>';
            $('#pending').append(el);
        } else if (st.status == 'reject') {
            el = '<tr><td class="serial">' + index + '</td><td class="avatar"><div class="round-img"><a href="' + st.avatar + '"><img class="rounded-circle" src="' + st.avatar + '" alt=""></a></div></td><td>' + doc.id + ' </td><td> <span class="name">' + st.name + '</span> </td><td><input class="btn btn-outline-danger" id="' + doc.id + '" type="submit" value="View Details"></td></tr>';
            $('#reject').append(el);
        }

        $('.btn').click(function() {
            let id = this.id;

            db.collection('validate_user').doc(id).get().then((snapshot) => {
                window.localStorage.setItem('user', JSON.stringify(snapshot.data()));
                window.localStorage.setItem('id', id);
                window.location = 'signup_details.html';
            });
        });

    });
});