
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Sidebar } from "flowbite-react";

export function Alert({message,confirmText, cancelText, onConfirmClicked, btnType}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {btnType === 1 && <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>}
      {btnType === 2 && <Sidebar.Item onClick={() => setOpenModal(true)}>Alert</Sidebar.Item>}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {message}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={onConfirmClicked}>
                {confirmText}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                {cancelText}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// Alert.propType = {
//     message: String,
//     confirmText: String,
//     cancelText: String
// }