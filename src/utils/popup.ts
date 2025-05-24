import Swal from 'sweetalert2';

type ConfirmationOptions = {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
};

export function showConfirmationAlert({
  title = 'Are you sure?',
  message,
  confirmText = 'Yes',
  cancelText = 'Cancel',
  onConfirm,
}: ConfirmationOptions) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton:
        'font-display cursor-pointer bg-blue-400 text-xl font-semibold w-[150px] h-[50px] px-4 py-2 text-white rounded ml-2',
      cancelButton:
        'font-display cursor-pointer bg-red-400 text-xl font-semibold w-[150px] h-[50px] px-4 py-2 text-white rounded mr-2',
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      html: `
        <div>
          <button id="custom-cancel" class="absolute top-2 right-2 text-3xl text-red-500 hover:scale-110 transition">❌</button>
          <h1 class="font-display text-4xl font-bold text-greenDDS text-center">${title}</h1>
          <p class="font-display  text-xl mt-4 text-center">${message}</p>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      background: 'white',

      width: '600px',
      padding: '30px',
      reverseButtons: true,
      didOpen: () => {
        const cancelBtn = document.getElementById('custom-cancel');
        if (cancelBtn) {
          cancelBtn.addEventListener('click', () => {
            Swal.close();
            console.log('cancel via ❌');
          });
        }
      },
    })
    .then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log('cancel via cancel button');
      }
    });
}

export function showSuccessAlert(title: string) {
  return Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title,
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    background: '#262d27',
    color: '#fff',
    customClass: {
      popup: 'rounded-xl shadow-lg font-display text-white text-base',
    },
    didRender: () => {
      const bar = document.querySelector('.swal2-timer-progress-bar');
      if (bar) {
        (bar as HTMLElement).style.setProperty(
          'background',
          'white',
          'important',
        );
      }
    },
  });
}
