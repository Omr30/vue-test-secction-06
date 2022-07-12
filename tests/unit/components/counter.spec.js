import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('Counter Component', () => { 
    test('debe de hacer match con el snapshot', () => { 

        const wrapper = shallowMount( Counter )

        expect( wrapper.html() ).toMatchSnapshot()

    })
})