export const refresh = () => {
    return setTimeout(() => {
        location.reload()
    },1500)
}

export const errorMessage = (message) => {
    return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
      });
}

export const successMessage = (message) => {
    return Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
        timer: 2000,
        showConfirmButton: false
    });

}