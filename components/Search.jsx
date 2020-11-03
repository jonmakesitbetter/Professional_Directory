let filteredEmployees = allEmployees.filter(employee=> {
    const qStr = q.toLowerCase()
    const eName = employee.name.toLowerCase()
    returneName.includes(qStr)
})