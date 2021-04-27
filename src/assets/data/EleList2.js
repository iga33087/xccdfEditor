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
    'prohibitChanges': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1'
    },
    'abstract': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1'
    },
    'note-tag': {
      'category':'attribute',
      'type':'identifier',
      'count':'0-1'
    },
    'extends': {
      'category':'attribute',
      'type':'identifier',
      'count':'0-1'
    },
    'xml:base': {
      'category':'attribute',
      'type':'special',
      'count':'0-1'
    },
    'Id': {
      'category':'attribute',
      'type':'special',
      'count':'0-1'
    },
  },
  'check': {
    'check-import': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'check-export': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'check-content-ref': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'check-content': {
      'category':'element',
      'type':'special',
      'count':'0-1'
    },
    'system': {
      'category':'attribute',
      'type':'URI',
      'count':'1'
    },
    'negate': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1'
    },
    'id': {
      'category':'attribute',
      'type':'identifier',
      'count':'0-1'
    },
    'selector': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'multi-check': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1'
    },
    'xml:base': {
      'category':'attribute',
      'type':'special',
      'count':'0-1'
    },
  },
  'check-content-ref': {
    'name': {
      'category':'attribute',
      'type':'string',
      'count':'1'
    },
    'href': {
      'category':'attribute',
      'type':'string',
      'count':'1'
    },
  },
  'fixtext': {
    'sub': {
      'category':'element',
      'type':'identifier',
      'count':'0-n'
    },
    'xml:lang': {
      'category':'attribute',
      'type':'special',
      'count':'0-1'
    },
    'override': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1'
    },
    'fixref': {
      'category':'attribute',
      'type':'identifier',
      'count':'0-1'
    },
    'reboot': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1'
    },
    'strategy': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'disruption': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'complexity': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
  },
  'fix': {
    'sub': {
      'category':'element',
      'type':'identifier',
      'count':'0-n'
    },
    'instance': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'id': {
      'category':'attribute',
      'type':'identifier',
      'count':'0-1'
    },
    'reboot': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1'
    },
    'strategy': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'disruption': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'complexity': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'system': {
      'category':'attribute',
      'type':'URI',
      'count':'0-1'
    },
    'platform': {
      'category':'attribute',
      'type':'URI',
      'count':'0-1'
    },
  },
  'choices': {
    'choice': {
      'category':'element',
      'type':'string',
      'count':'1-n'
    },
    'complex-choice': {
      'category':'element',
      'type':'special',
      'count':'1-n'
    },
    'mustMatch': {
      'category':'attribute',
      'type':'boolean',
      'count':'0-1'
    },
    'selector': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
  },
  'TestResult': {
    'benchmark': {
      'category':'element',
      'type':'special',
      'count':'0-1'
    },
    'tailoring-file': {
      'category':'element',
      'type':'special',
      'count':'0-1'
    },
    'title': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'remark': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'organization': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'identity': {
      'category':'element',
      'type':'string',
      'count':'0-1'
    },
    'profile': {
      'category':'element',
      'type':'identifier',
      'count':'0-1'
    },
    'target': {
      'category':'element',
      'type':'string',
      'count':'1-n'
    },
    'target-address': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'target-facts': {
      'category':'element',
      'type':'string',
      'count':'0-1'
    },
    'target-id-ref': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'platform': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'set-value': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'set-complex-value': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'rule-result': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'score': {
      'category':'element',
      'type':'decimal',
      'count':'1-n'
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
    'start-time': {
      'category':'attribute',
      'type':'dateTime',
      'count':'0-1'
    },
    'end-time': {
      'category':'attribute',
      'type':'dateTime',
      'count':'1'
    },
    'test-system': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'version': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'Id': {
      'category':'attribute',
      'type':'special',
      'count':'0-1'
    },
  },
  'rule-result': {
    'result': {
      'category':'element',
      'type':'string',
      'count':'1'
    },
    'override': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'ident': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'metadata': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'message': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'instance': {
      'category':'element',
      'type':'string',
      'count':'0-n'
    },
    'fix': {
      'category':'element',
      'type':'string',
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
    'idref': {
      'category':'attribute',
      'type':'identifier',
      'count':'1'
    },
    'role': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'severity': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'time': {
      'category':'attribute',
      'type':'dateTime',
      'count':'0-1'
    },
    'version': {
      'category':'attribute',
      'type':'string',
      'count':'0-1'
    },
    'weight': {
      'category':'attribute',
      'type':'decimal',
      'count':'0-1'
    },
  },
  'override': {
    'old-result': {
      'category':'element',
      'type':'string',
      'count':'1'
    },
    'new-result': {
      'category':'element',
      'type':'string',
      'count':'1'
    },
    'remark': {
      'category':'element',
      'type':'string',
      'count':'1'
    },
    'time': {
      'category':'attribute',
      'type':'dateTime',
      'count':'1'
    },
    'authority': {
      'category':'attribute',
      'type':'string',
      'count':'1'
    },
  },
  'tailoring-file': {
    'href': {
      'category':'attribute',
      'type':'URI',
      'count':'1'
    },
    'id': {
      'category':'attribute',
      'type':'identifier',
      'count':'1'
    },
    'version': {
      'category':'attribute',
      'type':'string',
      'count':'1'
    },
    'time': {
      'category':'attribute',
      'type':'dateTime',
      'count':'1'
    },
  },
  'Tailoring': {
    'benchmark': {
      'category':'element',
      'type':'special',
      'count':'0-1'
    },
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
      'type':'special',
      'count':'1'
    },
    'metadata': {
      'category':'element',
      'type':'special',
      'count':'0-n'
    },
    'Profile': {
      'category':'element',
      'type':'Profile',
      'count':'1-n'
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
    'Id': {
      'category':'attribute',
      'type':'special',
      'count':'0-1'
    },
  },
  'select': {
    'idref': {
      'category':'attribute',
      'type':'identifier',
      'count':'1'
    },
    'selected': {
      'category':'attribute',
      'type':'boolean',
      'count':'1'
    },
  },
  'refine-value': {
    'idref': {
      'category':'attribute',
      'type':'identifier',
      'count':'1'
    },
    'selector': {
      'category':'attribute',
      'type':'string',
      'count':'1'
    },
  },
  'platform': {
    'idref': {
      'category':'attribute',
      'type':'identifier',
      'count':'1'
    },
  },
}
