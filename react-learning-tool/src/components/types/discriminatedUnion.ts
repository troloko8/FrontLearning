export type Loading = {
    status: 'loading'
}

export type Success = {
    status: 'success'
    data: string[]
}

export type ErrorState = {
    status: 'error'
    error: Error
}

export type RequestState = Loading | Success | ErrorState

function handle(state: RequestState) {
    if (state.status === 'success') {
        console.log(state.data) // ✅ доступно
        // state.error     // ❌ ошибка
    }

    if (state.status === 'error') {
        console.log(state.error) // ✅
    }
}
