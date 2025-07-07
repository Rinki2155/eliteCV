import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function MyAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] to-[#2a0055] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto bg-[#efeaff] text-black p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-2">My Account</h2>
        <p className="text-gray-600 mb-8">
          Manage your account, password and subscriptions. Cancel an active subscription here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="text-center py-6">
            <CardContent>
              <h3 className="text-lg font-semibold mb-4">MANAGE ACCOUNT AND SUBSCRIPTION</h3>
              <img
                src="https://www.svgrepo.com/show/354110/settings-data-dashboard.svg"
                alt="Manage Subscription"
                className="h-24 mx-auto mb-4"
              />
              <p className="text-sm text-gray-600">
                See your subscription details, change or cancel your subscription, or change your password.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center py-6">
            <CardContent>
              <h3 className="text-lg font-semibold mb-4">LOGOUT</h3>
              <img
                src="https://www.svgrepo.com/show/491093/logout.svg"
                alt="Logout Illustration"
                className="h-24 mx-auto mb-4"
              />
              <p className="text-sm text-gray-600">Logout from your account.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
