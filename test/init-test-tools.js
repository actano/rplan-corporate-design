import chai from 'chai'
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'

enzyme.configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())
chai.use(sinonChai)
