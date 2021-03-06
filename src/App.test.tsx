import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders without crashing', () => {
  shallow(<App />)
})

it('renders welcome message', () => {
  const wrapper = shallow(<App />)
  const welcome = (
    <p>
      Edit <code>src/App.tsx</code> and save to reload.
    </p>
  )
  expect(wrapper.contains(welcome)).toEqual(true)
})
