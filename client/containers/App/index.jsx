import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'

import DocumentsIndex from 'containers/DocumentsIndex'
import AppDrawer from 'components/AppDrawer'

import 'styles/app.scss'

export default class App extends Component {
  handleDocumentSelect(id) {
    this.props.setActive(id)
    this.props.setDialogOpen(true)
  }

  render() {
    return (
      <div className='app'>
        <AppBar title='Regulately' />

        <div className='app__body'>
          <AppDrawer
            className='app__drawer'
            isOpen />

          <div className='app__content'>
            <DocumentsIndex
              onDocumentSelect={::this.handleDocumentSelect}/>
          </div>
        </div>
      </div>
    )
  }
}
