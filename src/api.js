// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const handleResponse = (response) => {
  if (response.status !== 200) {
    throw new Error('Network response was not ok.');
  }
  return response.data;
};

export const loginUser = async (username, password) => {
  try {
    const requestOptions = {
      method: 'post',
      url: `${API_BASE_URL}/admin/admin-login`,
      // url: 'http://localhost:80/admin/admin-login', // Replace with your actual API endpoint
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username: username,
        password: password,
      },
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error during login.');
  }
};

export const registerAdminAgent = async (userData) => {
  try {
    const requestOptions = {
      method: 'POST',
      url: `${API_BASE_URL}/admin/admin-agent`,
      // url: 'http://localhost:80/admin/admin-agent', // Replace with your actual API endpoint
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(userData),
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error during registration.');
  }
};

export const getAllUser = async () => {
  try {
    const requestOptions = {
      method: 'get',
      url: `${API_BASE_URL}/getalluser`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const getUserByUsername = async (userName) => {
  try {
    const requestOptions = {
      method: 'get',
      url: `${API_BASE_URL}/search/${userName}`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const blockUser = async (phoneNumber) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      phoneNumber,
      blocked: true,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    const response = await fetch(`${API_BASE_URL}/block-user`, requestOptions);
    const result = await response.text();
    return result;
  } catch (error) {
    throw new Error('Error blocking user.');
  }
};

export const unblockUser = async (phoneNumber) => {
  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      phoneNumber,
      blocked: true,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    const response = await fetch(`${API_BASE_URL}/unblock-user`, requestOptions);
    const result = await response.text();
    return result;
  } catch (error) {
    throw new Error('Error blocking user.');
  }
};

export const getAllAdminAgent = async () => {
  try {
    const requestOptions = {
      method: 'get',
      url: `${API_BASE_URL}/admin/all-admin-agent`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const getAdminAgentByUsername = async (userName) => {
  try {
    const requestOptions = {
      method: 'get',
      url: `${API_BASE_URL}/admin/admin-agent/${userName}`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const blockAdminAgent = async (userName) => {
  try {
    const requestOptions = {
      method: 'put',
      url: `${API_BASE_URL}/admin/admin-agent/block/${userName}`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const unblockAdminAgent = async (userName) => {
  try {
    const requestOptions = {
      method: 'put',
      url: `${API_BASE_URL}/admin/admin-agent/unblock/${userName}`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const registerAgent = async (userData) => {
  try {
    const requestOptions = {
      method: 'POST',
      url: `${API_BASE_URL}/admin/add-agent`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(userData),
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error during registration.');
  }
};

export const getAllAgent = async () => {
  try {
    const requestOptions = {
      method: 'get',
      url: `${API_BASE_URL}/admin/all-agent`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const getAgentByUsername = async (userName) => {
  try {
    const requestOptions = {
      method: 'get',
      url: `${API_BASE_URL}/admin/agent/${userName}`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const blockAgent = async (userName) => {
  try {
    const requestOptions = {
      method: 'put',
      url: `${API_BASE_URL}/admin/block-agent/${userName}`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const unblockAgent = async (userName) => {
  try {
    const requestOptions = {
      method: 'put',
      url: `${API_BASE_URL}/admin/unblock-agent/${userName}`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const getTotalUser = async () => {
  try {
    const requestOptions = {
      method: 'get',
      url: `${API_BASE_URL}/admin/total-user`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const getTotalAdminAgent = async () => {
  try {
    const requestOptions = {
      method: 'get',
      url: `${API_BASE_URL}/admin/total-admin-agent`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const getTotalAgent = async () => {
  try {
    const requestOptions = {
      method: 'get',
      url: `${API_BASE_URL}/admin/total-agent`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const addAdminBankAccount = async (formData) => {
  try {
    const requestOptions = {
      method: 'POST',
      url: `${API_BASE_URL}/admin/add-account`,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error during registration.');
  }
};

export const getAllBankDetail = async () => {
  try {
    const requestOptions = {
      method: 'get',
      url: `${API_BASE_URL}/admin/get-account`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const deleteAccount = async (accountNumber) => {
  try {
    const requestOptions = {
      method: 'POST', // Use 'DELETE' if your server supports it
      url: `${API_BASE_URL}/admin/delete-account/${accountNumber}`,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error during account deletion.');
  }
};

export const addBalanceToUser = async (formData) => {
  try {
    const requestOptions = {
      method: 'POST',
      url: `${API_BASE_URL}/admin/add-amount`,
      // url: 'http://localhost:80/admin/admin-agent', // Replace with your actual API endpoint
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(formData),
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error during add amount.');
  }
};

export const reduceBalanceToUser = async (formData) => {
  try {
    const requestOptions = {
      method: 'POST',
      url: `${API_BASE_URL}/admin/reduce-amount`,
      // url: 'http://localhost:80/admin/admin-agent', // Replace with your actual API endpoint
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(formData),
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error during add amount.');
  }
};

export const blockBankDetail = async (bankAccountNumber) => {
  try {
    const requestOptions = {
      method: 'put',
      url: `${API_BASE_URL}/admin/active-account/${bankAccountNumber}`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};

export const unblockBankDetail = async (bankAccountNumber) => {
  try {
    const requestOptions = {
      method: 'put',
      url: `${API_BASE_URL}/admin/deactive-account/${bankAccountNumber}`,
    };

    const response = await axios(requestOptions);
    return handleResponse(response);
  } catch (error) {
    throw new Error('Error registering user.');
  }
};


