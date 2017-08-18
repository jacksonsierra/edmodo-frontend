const initialAssignmentsState = {}

export const assignments = (
  state = initialAssignmentsState,
  action
) => {
  switch (action.type) {
    default:
      return { ...state }
  }
}

const initialSubmissionsState = {}

export const submissions = (
  state = initialSubmissionsState,
  action
) => {
  switch (action.type) {
    default:
      return { ...state }
  }
}
