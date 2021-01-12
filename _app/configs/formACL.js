module.exports = {
    'project.owner': {
        '/user/form/answer': ['put', 'get-admin'],
        '/user/form/answer/download': ['get'],
        '/admin/case': ['put', 'get-admin'],
        '/admin/case/log': ['get'],
        '/admin/case/moderation': ['get'],
        '/admin/case/resend-email': ['get', 'post'],
        '/admin/case/download': ['post'],
        '/admin/case/submission': ['get'],
        '/admin/formbuilder/form/:id': ['get'],
        '/form/form': ['get'],
        '/form/form/count': ['get'],
        '/form/form/recent': ['get'],
        '/form/submission/count': ['get', 'get-admin'],
        '/form/submission/activity': ['get'],
    },
    'project.operator': {
        '/user/form/answer': ['put', 'get-admin'],
        '/user/form/answer/download': ['get'],
        '/admin/case': ['put', 'get-admin'],
        '/admin/case/log': ['get'],
        '/admin/case/moderation': ['get'],
        '/admin/case/resend-email': ['get', 'post'],
        '/admin/case/download': ['post'],
        '/admin/case/submission': ['get'],
        '/admin/formbuilder/form/:id': ['get'],
        '/form/form': ['get'],
        '/form/form/count': ['get'],
        '/form/form/recent': ['get'],
        '/form/submission/count': ['get', 'get-admin'],
        '/form/submission/activity': ['get'],
    },
    'project.admin': {
        '/user/form/answer': ['put', 'get-admin'],
        '/user/form/answer/download': ['get'],
        '/admin/case': ['put', 'get-admin'],
        '/admin/case/log': ['get'],
        '/admin/case/moderation': ['get'],
        '/admin/case/resend-email': ['get', 'post'],
        '/admin/case/download': ['post'],
        '/admin/case/submission': ['get'],
        '/form/form': ['get'],
        '/form/form/:id': ['delete'],
        '/form/form/clone': ['post'],
        '/form/form/count': ['get'],
        '/form/form/recent': ['get'],
        '/form/form/activity': ['get'],
        '/admin/formbuilder/form/list': ['get'],
        '/admin/formbuilder/form/:id': ['get'],
        '/admin/formbuilder/form/:id/validate': ['get'],
        '/admin/formbuilder/form/:id/download': ['get'],
        '/admin/formbuilder/form/:id/publish': ['post'],
        '/admin/formbuilder/form': ['put'],
        '/admin/formbuilder/form/attr': ['post', 'delete', 'put'],
        '/admin/formbuilder/form/attr/test': ['post'],
        '/admin/formbuilder/question': ['post', 'delete', 'put'],
        '/admin/formbuilder/question/order': ['post'],
        '/admin/formbuilder/section': ['post', 'delete', 'put'],
        '/admin/formbuilder/form/:id/states': ['post', 'put'],
        '/admin/formbuilder/form/:id/states/:state': ['delete'],
        '/admin/formbuilder/form/:id/tokens': ['get'],
        '/project/:id/history': ['get'],
        '/project/:id/people/:uid/send-invitation': ['get'],
        '/project/:id/people': ['get', 'post'],
        '/project/:id/people/:uid': ['delete', 'put'],
    },
};
