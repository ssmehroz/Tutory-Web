console.log("loaded");

var db = firebase.firestore();

db.collection("user")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var st = doc.data();
      var el =
        "<tr><td>" +
        st.name +
        "</td><td>" +
        st.type +
        "</td><td>" +
        doc.id +
        "</td><td>" +
        st.ph_number +
        "</td></tr>";

      $("tbody").append(el);

      $("td.dataTables_empty").hide();
    });
  });
