alert('fdsa')
document.getElementById('submit').addEventListener('click', function () {
    



    if (!name.trim() || !phone.trim()) {
        document.getElementById('addInsuranceForm').reset();
        $('#addInsuranceModal').modal('hide');
    }

});
