import React from "react";

import { useState } from "react";
import DonationService from "../services/DonationService";

const CashForm = () => {
  const initialDonationState = {
    id: null,
    bank: "",
    account: "",
    amount: "",
    phone:"",
    name: "",
    description: "",
  };
  const [donation, setDonation] = useState(initialDonationState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDonation({ ...donation, [name]: value });
  };

  const saveDonation = () => {
    var data = {
      bank: donation.bank,
      amount: donation.amount,
      account: donation.account,
      phone: donation.phone,
      name: donation.name,
      description: donation.description,
    };

    DonationService.create(data)
      .then((response) => {
        setDonation({
          id: response.data.id,
          bank: response.data.bank,
          account: response.data.account,
          phone: response.data.phone,
          amount: response.data.amount,
          name: response.data.response,
          description: response.data.description,
        });

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="block rounded-lg z-1 bg-gray-50 ml-32 mr-32 mb-96 p-2 m-11 dark:bg-grey-100 justify-center content-center">
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className=" font-serif text-4xl leading-7 pt-0 text-gray-900">
                Add your information
              </h2>

              <div className="border-b border-gray-900/10 pb-12">
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      {" "}
                      Name of the bank{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        value={donation.bank}
                        onChange={handleInputChange}
                        name="bank"
                        id="bank"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      {" "}
                      Account Number{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        value={donation.account}
                        onChange={handleInputChange}
                        name="account"
                        id="account"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>

                 
                  <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Full Name{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={donation.name}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Phone {" "}
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={donation.phone}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                    Required Donation amount{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        id="amount"
                        name="amount"
                        type="text"
                        value={donation.amount}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Description{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        id="description"
                        name="description"
                        type="text"
                        value={donation.description}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="button"
                  className="text-sm  font-semibold leading-6 text-gray-900"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  onClick={saveDonation}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default CashForm;
