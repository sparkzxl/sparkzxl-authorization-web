import request from '@/utils/request'

const api = {
  areaTree: '/uaa/common/area/tree',
  saveArea: '/uaa/common/area/save',
  updateArea: '/uaa/common/area/update',
  deleteArea: '/uaa/common/area/delete',
}

export function getAreaTree() {
  return request({
    url: api.areaTree,
    method: 'get',
  })
}

export function saveArea(parameter) {
  return request({
    url: api.saveArea,
    method: 'post',
    data: parameter,
  })
}

export function updateArea(parameter) {
  return request({
    url: api.updateArea,
    method: 'put',
    data: parameter,
  })
}

export function deleteArea(parameter) {
  return request({
    url: api.deleteArea.concat('?ids[]=').concat(parameter),
    method: 'delete',
  })
}
