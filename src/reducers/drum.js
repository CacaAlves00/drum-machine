import { createSlice } from "@reduxjs/toolkit"

export const drumSlice = createSlice({
    name: 'drum',
    initialState: {
        lastPadTouched: null,
        bank: 'guitar',
        powered: true,
        volume: 0.5
    },
    reducers: {
        changeLastDrumPadTouched: (state, action) => {
            state.lastPadTouched = action.payload
        },

        toggleBank: (state) => {
            const toggledBank = state.bank === 'guitar' ? 'piano' : 'guitar'
            state.bank = toggledBank
        },

        togglePower: (state) => {
            state.powered = !state.powered
        },

        changeVolume: (state, action) => {
            const volume = action.payload
            if (volume > 1 || volume < 0)
                return

            state.volume = volume
        }
    }
})

export const { changeLastDrumPadTouched, toggleBank, 
    togglePower, changeVolume } = drumSlice.actions

export default drumSlice.reducer