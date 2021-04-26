export default {
  'Benchmark': {
    'title': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'description': {
      'category':'element',
      'type':'HTML-enabled text',
      'count':'0-n'
    },
    'status': {
      'category':'element',
      'type':'special',
      'count':'1-n',
      'valueOption': ['incomplete','draft','interim','accepted','deprecated']
    },
    'notice': {
      'category':'element',
      'type':'HTML-enabled text',
      'count':'0-n',
    },
    'front-matter': {
      'category':'element',
      'type':'HTML-enabled text',
      'count':'0-n',
    },
    'rear-matter': {
      'category':'element',
      'type':'HTML-enabled text',
      'count':'0-n',
    },
    'reference': {
      'category':'element',
      'type':'special',
      'count':'0-n',
    },
    'plain-text': {
      'category':'element',
      'type':'string',
      'count':'0-n',
    },
    //'cpe2:platform-specification':'element',
    'platform': {
      'category':'element',
      'type':'string',
      'count':'0-n',
    },
    'version': {
      'category':'element',
      'type':'string',
      'count':'1',
      'default':'1.0'
    },
    'metadata': {
      'category':'element',
      'type':'special',
      'count':'0-n',
    },
    'model': {
      'category':'element',
      'type':'URI',
      'count':'0-n',
    },
    'Profile': {
      'category':'element',
      'type':'special',
      'count':'0-n',
    },
    'Value': {
      'category':'element',
      'type':'special',
      'count':'0-n',
    },
    'Group': {
      'category':'element',
      'type':'special',
      'count':'0-n',
    },
    'Rule': {
      'category':'element',
      'type':'special',
      'count':'0-n',
    },
    'TestResult': {
      'category':'element',
      'type':'special',
      'count':'0-n',
    },
    'signature': {
      'category':'element',
      'type':'special',
      'count':'0-1',
    },
    'id': {
      'category':'attribute',
      'type':'special',
      'count':'1',
    },
    'Id': {
      'category':'attribute',
      'type':'special',
      'count':'0-1',
    },
    'resolved': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1',
    },
    'style': {
      'category':'attribute',
      'type':'string',
      'count':'0-1',
    },
    'style-href': {
      'category':'attribute',
      'type':'URI',
      'count':'0-1',
    },
    'xml:lang': {
      'category':'attribute',
      'type':'URI',
      'count':'0-1',
    },
    'xmlns': {
      'category':'attribute',
      'type':'string',
      'count':'1',
      'default':'http://checklists.nist.gov/xccdf/1.2'
    },
    'xmlns:xsi': {
     'category':'attribute',
     'type':'string',
     'count':'1',
     'default':'http://www.w3.org/2001/XMLSchema-instance'
    }
  },
  'Group': {
    'title': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'description': {
      'category':'element',
      'type':'HTML-enabled text',
      'count':'0-n'
    },
    'Value': {
      'category':'element',
      'type':'Value',
      'count':'0-n'
    },
    'Group': {
      'category':'element',
      'type':'Group',
      'count':'0-n'
    },
    'Rule': {
      'category':'element',
      'type':'Rule',
      'count':'0-n'
    },
    'signature': {
      'category':'element',
      'type':'special',
      'count':'0-1'
    },
    'id': {
      'category':'attribute',
      'type':'special',
      'count':'1'
    },
  },
  'Rule': {
    'title': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'description': {
      'category':'element',
      'type':'HTML-enabled text',
      'count':'0-n'
    },
    'ident': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'impact-metric': {
      'category':'element',
      'type':'string',
      'count':'0-1'
    },
    'profile-note': {
      'category':'element',
      'type':'HTML-enabled text',
      'count':'0-n'
    },
    'fixtext': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'fix': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'check': {
      'category':'element',
      'type':'special',
      'count':'1-n'
    },
    'complex-check': {
      'category':'element',
      'type':'special',
      'count':'1'
    },
    'signature': {
      'category':'element',
      'type':'special',
      'count':'0-1'
    },
    'role': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'id': {
      'category':'attribute',
      'type':'special',
      'count':'1'
    },
    'severity': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'multiple': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1'
    },
  },
  'Value': {
    'title': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'description': {
      'category':'element',
      'type':'HTML-enabled text',
      'count':'0-n'
    },
    'value': {
      'category':'element',
      'type':'string',
      'count':'1-n'
    },
    'complex-value': {
      'category':'element',
      'type':'special',
      'count':'1-n'
    },
    'default': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'complex-default': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'match': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'lower-bound': {
      'category':'element',
      'type':'decimal',
      'count':'0-n'
    },
    'upper-bound': {
      'category':'element',
      'type':'decimal',
      'count':'0-n'
    },
    'choices': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'source': {
      'category':'element',
      'type':'URI',
      'count':'0-n'
    },
    'signature': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'id': {
      'category':'attribute',
      'type':'special',
      'count':'1'
    },
    'type': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'operator': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'interactive': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1'
    },
    'interfaceHint': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
  },
  'Profile': {
    'status': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'dc-status': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'version': {
      'category':'element',
      'type':'string',
      'count':'0-1'
    },
    'title': {
      'category':'element',
      'type':'string',
      'count':'1-n'
    },
    'description': {
      'category':'element',
      'type':'HTML-enabled text',
      'count':'0-n'
    },
    'reference': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'platform': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'select': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'setcomplex-value': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'set-value': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'refine-value': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'refine-rule': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'metadata': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'signature': {
      'category':'element',
      'type':'special',
      'count':'0-1'
    },
    'id': {
      'category':'attribute',
      'type':'special',
      'count':'1'
    },
    'prohibitChanges':'attribute',
    'abstract':'attribute',
    'note-tag':'attribute',
    'extends':'attribute',
    'xml:base':'attribute',
    'Id':'attribute',
  },
}
