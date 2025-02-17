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

export const confirmMessage = (message) => {
    return Swal.fire({
        title: "Are you sure?",
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
}

export const deleteMessage = (message) => {
    return Swal.fire({
        title: "Deleted!",
        text: message,
        icon: "success"
      });
}