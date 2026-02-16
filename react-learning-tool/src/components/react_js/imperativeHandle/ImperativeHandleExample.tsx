import React, { useRef } from "react"
import Modal from "./Modal"


export default function ImperativeHandleExample() {
    const modalRef = useRef<React.ElementRef<typeof Modal>>(null)

    const openUserModal = async () => {
        modalRef.current?.setContent(<div>Готовим данные...</div>)
        modalRef.current?.setLoading(true)
        modalRef.current?.open()

        await new Promise(r => setTimeout(r, 1200))

        modalRef.current?.setLoading(false)
        modalRef.current?.setContent(
            <div>
                <b>Пользователь:</b> Nafty <br />
                <b>Роль:</b> Admin <br />
                <b>Статус:</b> Active
            </div>
        )
    }

    return (
        <div style={{ padding: 20 }}>
            <button onClick={openUserModal}>
                Открыть модалку с загрузкой
            </button>

            <button
                onClick={() => modalRef.current?.toggle()}
                style={{ marginLeft: 12 }}
            >
                Toggle
            </button>

            <Modal ref={modalRef} title="User info" />
        </div>
    )
}
