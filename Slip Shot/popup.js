// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 $('#submitMessage').submit(function (event) {
            event.preventDefault();
            $.ajax({
                type : 'POST',
                url : 'https://slipshot-hackathon.appspot.com/',
                data : {
                    mediaURL: 'mediaURL',
                    outgoingNumber: 'outgoingNumber'
                }
            }); 
        });


